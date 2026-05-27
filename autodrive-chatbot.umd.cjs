(function(n,c){typeof exports=="object"&&typeof module<"u"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):(n=typeof globalThis<"u"?globalThis:n||self,c(n.AutoDriveChat={}))})(this,(function(n){"use strict";function c(a){return a.replace(/\/+$/,"")}function l(a){return encodeURIComponent(a)}async function f(a){const t=await a.text(),e=t?JSON.parse(t):null;if(!a.ok){const i=typeof e?.message=="string"?e.message:typeof e?.detail=="string"?e.detail:`AutoDrive request failed with status ${a.status}`;throw new Error(i)}return e}class g{constructor(t){this.config=t}async ask(t){const e=await fetch(this.datasetQuestionAskUrl(),{method:"POST",headers:this.headers(!0),body:JSON.stringify(t)});return f(e)}async getResult(t){const e=await fetch(`${this.datasetQuestionPollUrl()}/${l(t)}`,{method:"GET",headers:this.headers(!1)});return f(e)}datasetQuestionAskUrl(){const t=c(this.config.autodriveUrl),e=l(this.config.datasetId);return`${t}/datasets/${e}/ai-question`}datasetQuestionPollUrl(){const t=c(this.config.autodriveUrl),e=l(this.config.datasetId);return`${t}/datasets/${e}/ai-question`}headers(t){return{...t?{"Content-Type":"application/json"}:{},Authorization:`Bearer ${this.config.apiKey}`,"X-AutoDrive-Client":this.config.client,"X-AutoDrive-Environment":this.config.environment}}}const y=`
:host {
  --ad-chat-primary: #111827;
  --ad-chat-accent: #2563eb;
  --ad-chat-bg: #ffffff;
  --ad-chat-text: #111827;
  --ad-chat-launcher-bg: #ffffff;
  --ad-chat-launcher-fg: #111827;
  --ad-chat-muted: #6b7280;
  --ad-chat-border: #e5e7eb;
  --ad-chat-surface: #f9fafb;
  color: var(--ad-chat-text);
  display: block;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.ad-chat__shell {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ad-chat {
  background: var(--ad-chat-bg);
  border: 1px solid var(--ad-chat-border);
  border-radius: 18px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.18);
  display: flex;
  flex-direction: column;
  max-height: min(680px, 88vh);
  min-height: 460px;
  overflow: hidden;
  width: min(420px, 100%);
}

:host([data-chat-open="true"]) .ad-chat {
  max-height: min(740px, 88vh);
  min-height: 720px;
}

:host([data-position="bottom-right"]),
:host([data-position="bottom-left"]) {
  bottom: 24px;
  position: fixed;
  width: min(420px, calc(100vw - 32px));
  z-index: 2147483000;
}

:host([data-position="bottom-right"]) {
  right: 24px;
}

:host([data-position="bottom-right"]) .ad-chat__shell {
  align-items: flex-end;
}

:host([data-position="bottom-left"]) {
  left: 24px;
}

:host([data-position="bottom-left"]) .ad-chat__shell {
  align-items: flex-start;
}

:host([data-position="bottom-right"]) .ad-chat,
:host([data-position="bottom-left"]) .ad-chat {
  width: 100%;
}

.ad-chat__header {
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--ad-chat-accent) 26%, transparent), transparent 36%),
    var(--ad-chat-primary);
  color: white;
  padding: 18px 20px;
}

.ad-chat__eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
  opacity: 0.78;
  text-transform: uppercase;
}

.ad-chat__title {
  font-size: 18px;
  font-weight: 760;
  line-height: 1;
}

.ad-chat__messages {
  background: linear-gradient(180deg, #fff, var(--ad-chat-surface));
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding: 18px;
}

.ad-chat__message {
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.45;
  max-width: 88%;
  padding: 12px 14px;
  white-space: pre-wrap;
}

.ad-chat__message--assistant,
.ad-chat__message--system {
  align-self: flex-start;
  background: #fff;
  border: 1px solid var(--ad-chat-border);
}

.ad-chat__message--user {
  align-self: flex-end;
  background: var(--ad-chat-primary);
  color: white;
}

.ad-chat__sources {
  border-top: 1px solid var(--ad-chat-border);
  color: var(--ad-chat-muted);
  font-size: 12px;
  margin-top: 10px;
  padding-top: 8px;
}

.ad-chat__source + .ad-chat__source {
  margin-top: 6px;
}

.ad-chat__status {
  color: var(--ad-chat-muted);
  font-size: 13px;
  padding: 0 18px 12px;
}

.ad-chat__form {
  background: var(--ad-chat-bg);
  border-top: 1px solid var(--ad-chat-border);
  display: flex;
  gap: 10px;
  padding: 14px;
}

.ad-chat__input {
  border: 1px solid var(--ad-chat-border);
  border-radius: 14px;
  color: var(--ad-chat-text);
  flex: 1;
  font: inherit;
  min-height: 44px;
  padding: 11px 12px;
  resize: none;
}

.ad-chat__input:focus {
  border-color: var(--ad-chat-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ad-chat-accent) 16%, transparent);
  outline: none;
}

.ad-chat__button {
  align-self: end;
  background: var(--ad-chat-accent);
  border: 0;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  min-height: 44px;
  padding: 0 16px;
}

.ad-chat__button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.ad-chat__launcher {
  align-items: center;
  background:
    radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--ad-chat-accent) 20%, transparent), transparent 44%),
    var(--ad-chat-launcher-bg);
  border: 1px solid color-mix(in srgb, var(--ad-chat-accent) 24%, var(--ad-chat-border));
  border-radius: 999px;
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.22);
  color: var(--ad-chat-launcher-fg);
  cursor: pointer;
  display: inline-flex;
  height: 64px;
  justify-content: center;
  padding: 0;
  transition:
    box-shadow 160ms ease,
    transform 160ms ease;
  width: 64px;
}

.ad-chat__launcher:hover {
  box-shadow: 0 22px 52px rgba(15, 23, 42, 0.28);
  transform: translateY(-2px);
}

.ad-chat__launcher:focus-visible {
  box-shadow:
    0 18px 42px rgba(15, 23, 42, 0.22),
    0 0 0 4px color-mix(in srgb, var(--ad-chat-accent) 28%, transparent);
  outline: none;
}

.ad-chat__launcher-logo {
  display: block;
  height: 38px;
  object-fit: contain;
  width: 38px;
}

.ad-chat__launcher-close,
.ad-chat__launcher-mark {
  font-size: 28px;
  font-weight: 760;
  line-height: 1;
}
`,u="autodrive-chat",w=1500,A=120;function h(){return`${Date.now()}-${Math.random().toString(16).slice(2)}`}function C(a){return a==="success"||a==="completed"||a==="failed"}function s(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(a){const t=a.metadata?.source??a.metadata?.file_name??a.metadata?.filename,e=typeof t=="string"&&t.trim()?t.trim():"Fonte",i=a.page_content??a.content??"";return i?`${e}: ${i}`:e}function $(a){return a.relevant_documents??a.sources??[]}function m(a){const t=a.orchestration_result?.state,e=a.orchestration_result?.response_mode_applied;return!!a.payload&&(t==="awaiting_client_execution"||e==="structured")}async function x(a){if(!a)return;const t=await a();return Object.keys(t).length>0?t:void 0}class _ extends HTMLElement{constructor(){super(),this.messages=[],this.loading=!1,this.open=!0,this.statusText="",this.inputValue="",this.root=this.attachShadow({mode:"open"})}configure(t){this.config=t,this.client=new g(t),this.messages=[{id:h(),role:"system",content:t.initialMessage??"Olá! Como posso ajudar?"}],this.open=(t.theme?.position??"inline")==="inline",this.applyTheme(),this.render(),t.onReady?.(this)}destroy(){this.remove()}getConversationId(){return this.conversationId}async sendMessage(t){if(!this.config||!this.client)throw new Error("AutoDrive chat is not configured");const e=t.trim();if(!e||this.loading)return;const i={id:h(),role:"user",content:e,status:"sent"};this.messages.push(i),this.config.onMessage?.(i),this.inputValue="",this.loading=!0,this.statusText="Processando resposta...",this.render();try{const o=await this.buildPayload(e),r=await this.client.ask(o);this.conversationId=r.conversation_id??this.conversationId;const d=await this.pollResult(r.question_id);if(this.conversationId=d.conversation_id??this.conversationId,d.status==="failed")throw new Error(d.status_reason??"AutoDrive failed to answer the question");await this.handleResult(d)}catch(o){const r=o instanceof Error?o:new Error("Unknown AutoDrive error");this.messages.push({id:h(),role:"assistant",content:"Não foi possível responder agora. Tente novamente em instantes.",status:"failed"}),this.config.onError?.(r)}finally{this.loading=!1,this.statusText="",this.render()}}async buildPayload(t){if(!this.config)throw new Error("AutoDrive chat is not configured");const e=await x(this.config.uiContextProvider),i=await x(this.config.userContextProvider);return(this.config.apiProfile??"embed")==="assistant"?{question:t,...this.conversationId?{session_id:this.conversationId}:{}}:{dataset_id:this.config.datasetId,question:t,client:this.config.client,environment:this.config.environment,...this.conversationId?{conversation_id:this.conversationId}:{},...e?{ui_context:e}:{},...i?{user_context:i}:{},orchestration:{response_mode:"auto",thinking_enabled:!0}}}async pollResult(t){if(!this.config||!this.client)throw new Error("AutoDrive chat is not configured");const e=this.config.maxPollAttempts??A,i=this.config.pollIntervalMs??w;for(let o=0;o<e;o+=1){const r=await this.client.getResult(t);if(C(r.status))return r;await new Promise(d=>setTimeout(d,i))}throw new Error("Timed out waiting for AutoDrive answer")}async handleResult(t){if(!this.config)return;if(m(t)){const o={client:this.config.client,datasetId:this.config.datasetId,questionId:t.question_id,conversationId:t.conversation_id??void 0,payload:t.payload,result:t};await this.config.onExecutionRequest?.(o)}const e=t.answer?.trim()||(m(t)?"A resposta precisa de execucao no sistema do cliente.":"Resposta recebida sem conteúdo renderizável."),i={id:h(),role:"assistant",content:e,sources:$(t),status:"sent"};this.messages.push(i),this.config.onMessage?.(i)}applyTheme(){if(!this.config)return;const t=this.config.theme??{},e=t.position??"inline";this.dataset.position=e,this.style.setProperty("--ad-chat-primary",t.primaryColor??"#111827"),this.style.setProperty("--ad-chat-accent",t.accentColor??"#2563eb"),this.style.setProperty("--ad-chat-bg",t.backgroundColor??"#ffffff"),this.style.setProperty("--ad-chat-text",t.textColor??"#111827"),this.style.setProperty("--ad-chat-launcher-bg",t.launcherBackgroundColor??t.backgroundColor??"#ffffff"),this.style.setProperty("--ad-chat-launcher-fg",t.launcherForegroundColor??t.primaryColor??"#111827")}render(){const t=this.config?.title??"AutoDrive",e=this.config?.placeholder??"Digite sua pergunta...",i=this.config?.client??"client",r=(this.config?.theme?.position??"inline")!=="inline";this.open?this.setAttribute("data-chat-open","true"):this.removeAttribute("data-chat-open"),this.root.innerHTML=`
      <style>${y}</style>
      <div class="ad-chat__shell">
        ${this.open?this.renderPanel({title:t,placeholder:e,client:i}):""}
        ${r?this.renderLauncher():""}
      </div>
    `,this.bindEvents()}renderPanel({title:t,placeholder:e,client:i}){return`
      <section class="ad-chat" aria-label="${s(t)}">
        <header class="ad-chat__header">
          <div class="ad-chat__eyebrow">${s(i)}</div>
          <div class="ad-chat__title">${s(t)}</div>
        </header>
        <div class="ad-chat__messages" role="log" aria-live="polite">
          ${this.messages.map(o=>this.renderMessage(o)).join("")}
        </div>
        ${this.statusText?`<div class="ad-chat__status">${s(this.statusText)}</div>`:""}
        <form class="ad-chat__form">
          <textarea class="ad-chat__input" rows="1" ${this.loading?"disabled":""} placeholder="${s(e)}">${s(this.inputValue)}</textarea>
          <button class="ad-chat__button" type="submit" ${this.loading?"disabled":""}>Enviar</button>
        </form>
      </section>
    `}renderLauncher(){const t=this.config?.theme?.launcherLabel??"Abrir assistente",e=this.config?.theme?.launcherLogoUrl,i=this.open?t.replace(/^Abrir/i,"Fechar"):t;return`
      <button class="ad-chat__launcher" type="button" aria-label="${s(i)}" aria-expanded="${this.open?"true":"false"}">
        ${this.open?'<span class="ad-chat__launcher-close" aria-hidden="true">×</span>':e?`<img class="ad-chat__launcher-logo" src="${s(e)}" alt="" />`:'<span class="ad-chat__launcher-mark" aria-hidden="true">A</span>'}
      </button>
    `}renderMessage(t){const e=t.sources?.length?`<div class="ad-chat__sources">${t.sources.map(i=>`<div class="ad-chat__source">${s(E(i))}</div>`).join("")}</div>`:"";return`
      <article class="ad-chat__message ad-chat__message--${t.role}">
        ${s(t.content)}
        ${e}
      </article>
    `}bindEvents(){const t=this.root.querySelector(".ad-chat__input"),e=this.root.querySelector(".ad-chat__form"),i=this.root.querySelector(".ad-chat__launcher");t?.addEventListener("input",()=>{this.inputValue=t.value}),e?.addEventListener("submit",o=>{o.preventDefault(),this.sendMessage(this.inputValue)}),i?.addEventListener("click",()=>{this.open=!this.open,this.render()})}}function v(){customElements.get(u)||customElements.define(u,_)}function b(a){v();const t=typeof a.container=="string"?document.querySelector(a.container):a.container;if(!t)throw new Error(`AutoDrive chat container not found: ${String(a.container)}`);const e=document.createElement(u);return t.innerHTML="",t.appendChild(e),e.configure(a),e}const p={init(a){return b(a)}};typeof window<"u"&&(window.AutoDriveChat=p,window.AutoDriveChatConfig&&queueMicrotask(()=>{window.AutoDriveChatConfig&&p.init(window.AutoDriveChatConfig)})),n.AutoDriveChat=p,n.AutoDriveChatClient=g,n.AutoDriveChatElement=_,n.defineAutoDriveChatElement=v,n.mountAutoDriveChat=b,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
