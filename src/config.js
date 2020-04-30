const config = {
   authnUrl: 'https://o100.odainfra.com/ceair-connectors/aaa/user',
   wsServer: 'wss://o100.odainfra.com/ceair-connectors/botconnector/ws',
   botName: 'CeairBot',
   removeAskFeedback: true,
   hideHotQuestions: true,
   hideHint: true,
   static_message: {
      title: "智能客服助理",
      loading_message: "努力加载中",
      askbox_placeholder: "在这里提问吧...",
      mainmenu_message: "你好"
   }
}

module.exports = config

