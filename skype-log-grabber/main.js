/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable wrap-iife */


(function () {
  const app = {};

  function setTextContentById(e, t) {
    document.getElementById(e).textContent = t;
  }

  function r8(e) {
    return e.replace(/^8:/, '');
  }

  function unescape(e) {
    return e.replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }

  function showByClassName(className, show) {
    for (let n = document.getElementsByClassName(className), a = 0; a < n.length; a++) {
      n[a].style.display = show ? 'block' : 'none';
    }
  }

  function conversationTitle(e) {
    return e.displayName ? unescape(e.displayName) : r8(e.id);
  }

  function renderMessages(convIdx) {
    const n = document.getElementById('messages');
    n.innerHtml = '';
    n.textContent = '';
    document.getElementById('selected-conversation-header').textContent = conversationTitle(app.conversations[convIdx]);
    const messages = app.conversations[convIdx]
          && app.conversations[convIdx].MessageList
      ? app.conversations[convIdx].MessageList : [];
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].content !== '') {
        const r = document.createElement('li');
        r.className = 'message';
        const msgid = messages[i].id;
        r.setAttribute('id', msgid);
        const o = document.createElement('div');
        r.appendChild(o);

        const cbEl = document.createElement('input');
        cbEl.setAttribute('type', 'checkbox');
        if (app.selection.isSelected(convIdx, msgid)) {
          cbEl.setAttribute('checked', 'checked');
          r.classList.add('selected-message');
        }
        cbEl.setAttribute('data-conv', convIdx);
        cbEl.setAttribute('data-msgid', msgid);
        // eslint-disable-next-line no-use-before-define
        cbEl.addEventListener('change', onCheckMessage);
        o.appendChild(cbEl);

        const authorEl = document.createElement('span');
        authorEl.className = 'author';
        authorEl.textContent = r8(messages[i].from);
        o.appendChild(authorEl);

        const timestampEl = document.createElement('span');
        timestampEl.className = 'timestamp';
        timestampEl.textContent = new Date(messages[i].originalarrivaltime).toLocaleString();
        o.appendChild(timestampEl);

        const messageBodyEl = document.createElement('div');
        messageBodyEl.className = 'message-body';
        messageBodyEl.innerText = unescape(messages[i].content);
        r.appendChild(messageBodyEl);
        n.appendChild(r);
      }
    }
  }

  let currentConvIdx = -1;

  function onClickConv(event) {
    event.preventDefault();
    const convIdx = parseInt(event.target.getAttribute('data-conv'), 10);
    currentConvIdx = convIdx;
    renderMessages(convIdx);
    // eslint-disable-next-line no-use-before-define
    updateConvHeader(convIdx);
  }


  class SelectionState {
    constructor(conversationsList, changed) {
      this.conversationsList = conversationsList;
      this.selection = Array.from('x'.repeat(this.conversationsList.length)).map(() => new Set([]));
      this.changed = changed;
    }

    selectConversation(convIdx, checked) {
      this.selection[convIdx] = checked
        ? new Set(this.conversationsList[convIdx].MessageList.map((m) => m.id)) : new Set([]);
      this.changed({ type: 'conversation', convIdx });
    }

    select(convIdx, messageId, checked) {
      this.selection[convIdx][checked ? 'add' : 'delete'](messageId);
      this.changed({
        type: 'message', convIdx, messageId, checked,
      });
    }

    isSelectedConversation(convIdx) {
      return this.selection[convIdx].size > 0;
    }

    isSelected(convIdx, messageId) {
      return this.selection[convIdx].has(messageId);
    }

    countSelectedMessages() {
      return this.selection.reduce((acc, c) => acc + c.size, 0);
    }

    countSelectedConversations() {
      return this.selection.reduce((acc, c) => acc + (c.size > 0 ? 1 : 0), 0);
    }

    countSelectedConvMessages(convIdx) {
      return this.selection[convIdx].size;
    }

    stats() {
      return {
        conversations: this.countSelectedConversations(),
        messages: this.countSelectedMessages(),
      };
    }
  }

  function readFileJSONAsync(file) {
    // Always return a Promise
    return new Promise((resolve, reject) => {
      let content = '';
      const reader = new FileReader();
      // Wait till complete
      reader.onloadend = function (e) {
        content = e.target.result;
        resolve(JSON.parse(content));
      };
      // Make sure to handle error states
      reader.onerror = function (e) {
        reject(e);
      };
      reader.readAsText(file);
    });
  }

  function onCheckMessage(event) {
    const convIdx = parseInt(event.target.getAttribute('data-conv'), 10);
    const msgid = event.target.getAttribute('data-msgid');
    app.selection.select(convIdx, msgid, event.target.checked);

    const msgContainer = event.target.closest('.message');
    if (event.target.checked) {
      msgContainer.classList.add('selected-message');
    } else {
      msgContainer.classList.remove('selected-message');
    }
  }

  // eslint-disable-next-line no-inner-declarations
  function renderConversationsList(conversationsList) {
    for (let t = document.getElementById('conversations'), convIdx = 0; convIdx < conversationsList
      .length; convIdx++) {
      const a = document.createElement('li');
      a.className = 'conversations';

      const s = document.createElement('a');
      s.setAttribute('href', '#');
      s.setAttribute('data-conv', convIdx);
      s.className = 'conv-link';
      s.textContent = conversationTitle(conversationsList[convIdx]);
      a.appendChild(s);

      const r = document.createElement('div');
      r.className = 'conv-item-summary';
      a.appendChild(r);

      // .selected-conv-message-count[data-conv="${convIdx}"]
      r.insertAdjacentHTML('beforeend', `<span class="selected-conv-message-count" data-conv="${convIdx}">0</span>`);
      r.insertAdjacentHTML('beforeend', '<span> из </span>');
      r.insertAdjacentHTML('beforeend', `<span class="messageCount">${conversationsList[convIdx].MessageList.length}</span>`);
      r.insertAdjacentHTML('beforeend', '<span> сообщ. </span>');

      const timestamp = conversationsList[convIdx].properties
        && conversationsList[convIdx].properties.lastimreceivedtime
        ? conversationsList[convIdx].properties.lastimreceivedtime : null;
      if (timestamp) {
        r.insertAdjacentHTML('beforeend', `<span class="timestamp-conv"> Последнее: ${new Date(timestamp).toLocaleDateString()} </span>`);
      }

      t.appendChild(a);
    }
    for (let d = document.getElementsByClassName('conv-link'), convIdx = 0; convIdx < d.length; convIdx++) {
      d[convIdx].addEventListener('click', onClickConv);
    }
  }

  function renderSelectedStats(counts) {
    const { conversations, messages } = counts;
    setTextContentById('sel-hdr-stats', `${conversations} `);
    setTextContentById('sel-hdr-stats-messages', `${messages}`);
  }

  function updateConvHeader(convIdx) {
    const sc = app.selection.countSelectedConvMessages(convIdx);
    const c = app.selection.conversationsList[convIdx].MessageList.length;
    setTextContentById('sel-current-conv-messages', `${sc}`);
    setTextContentById('current-conv-messages', `${c}`);
    showByClassName('selection-conv-summary', true);
  }

  function updateMessageItems(convIdx) {
    if (convIdx !== currentConvIdx) {
      return;
    }
    const items = document.querySelectorAll('.message');
    // eslint-disable-next-line no-restricted-syntax
    for (const itemEl of items) {
      const msgid = itemEl.getAttribute('id');
      const selected = app.selection.isSelected(convIdx, msgid);
      const cb = itemEl.querySelector('input[type="checkbox"]');
      if (selected) {
        itemEl.classList.add('selected-message');
        cb.checked = true;
      } else {
        itemEl.classList.remove('selected-message');
        cb.checked = false;
      }
    }
  }

  function updateConvItems(convIdx) {
    const el = document.querySelector(`.selected-conv-message-count[data-conv="${convIdx}"]`);
    const c = app.selection.countSelectedConvMessages(convIdx);
    el.textContent = `${c}`;
  }

  async function onClickFileUpload() {
    let fileinputEl;
    if (typeof window.FileReader === 'function') {
      fileinputEl = document.getElementById('fileinput');
    } else {
      alert("The file API isn't supported on this browser. Please use a more modern browser.");
      return;
    }

    let dump;
    if (fileinputEl.files && fileinputEl.files[0]) {
      document.getElementById('progress').style.display = 'block';
      const selectedFile = fileinputEl.files[0];
      dump = await readFileJSONAsync(selectedFile);
    } else {
      alert("Please select a file before clicking 'Load'");
      return;
    }

    if (dump && dump.userId && dump.conversations && dump.exportDate) {
      const t = new Date(dump.exportDate);
      const filteredConversations = dump.conversations.filter((e) => e.id && e.id !== 'ALL' && !/@cast\.skype$/.test(e.id)
                                  && e.MessageList && e.MessageList.length);

      setTextContentById('hdr-user', r8(dump.userId));
      setTextContentById('hdr-exported', t.toLocaleString());
      setTextContentById('hdr-stats', `${filteredConversations.length}`);
      setTextContentById('hdr-stats-messages', `${filteredConversations.reduce((prev, nc) => nc.MessageList.length + prev, 0)}`);

      renderConversationsList(filteredConversations);

      app.dump = dump;
      app.conversations = filteredConversations;
      app.selection = new SelectionState(filteredConversations, (changeEvent) => {
        // eslint-disable-next-line no-console
        console.log('on change selection', changeEvent);
        renderSelectedStats(app.selection.stats());

        if (changeEvent.convIdx === currentConvIdx) {
          updateConvHeader(changeEvent.convIdx);
        }

        if (changeEvent.type === 'conversation' && changeEvent.convIdx === currentConvIdx) {
          updateMessageItems(changeEvent.convIdx);
        }

        updateConvItems(changeEvent.convIdx);
      });

      renderSelectedStats(app.selection.stats());

      showByClassName('step-1', false);
      showByClassName('step-2', true);
    }
  }

  function createSelectedData() {
    const exportedData = {};
    exportedData.userId = app.dump.userId;
    exportedData.exportDate = app.dump.exportDate;

    const exportedConversations = app.conversations.map((conv, convIdx) => {
      if (!app.selection.isSelectedConversation(convIdx)) {
        return null;
      }
      const copy = { ...conv };
      const selectedMessagesIds = app.selection.selection[convIdx];
      copy.MessageList = conv.MessageList.filter((m) => selectedMessagesIds.has(m.id));
      return copy;
    }).filter((v) => !!v);

    exportedData.conversations = exportedConversations;
    return exportedData;
  }

  function str2Uint8Array(s) {
    const out = [];
    for (let i = 0; i < s.length; i++) {
      out[i] = s.charCodeAt(i);
    }
    return new Uint8Array(out);
  }

  function saveJson(jsonData, fileName) {
    // const str = JSON.stringify(jsonData);
    // const data = str2Uint8Array(str);

    // const blob = new Blob([data], {
    //   type: 'application/octet-stream',
    // });

    const blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
  }

  function onCkicSave() {
    if (app.selection.countSelectedMessages() === 0) {
      alert('Выберите хотя бы олно сообщение');
      return;
    }

    const data = createSelectedData();
    saveJson(data, 'filtered-messages.json');
  }

  document.getElementById('btnLoad').addEventListener('click', () => onClickFileUpload());
  document.getElementById('btnSave').addEventListener('click', () => onCkicSave());


  showByClassName('step-2', !1);
  showByClassName('step-1', !0);

  document.querySelector('#select-all-messages').addEventListener('click', () => {
    app.selection.selectConversation(currentConvIdx, true);
  });
  document.querySelector('#reset-all-messages').addEventListener('click', () => {
    app.selection.selectConversation(currentConvIdx, false);
  });
})();
