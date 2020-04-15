

const display ={
  title:"智能客服助理",
  menu: {
    left_menu_1: "相关答案",
    left_menu_2: "热门问题",
    left_menu_3: "问题分类",
    left_menu_4: "继续提问",
    left_menu_5: "非常有用",
    left_menu_6: "转人工服务"
    },
  js_message: {
    item_1: "很高兴能帮到您，祝您生活愉快",
    item_2: "获取位置信息失败",
    item_3:"发送失败，浏览器未允许获取位置信息",
    item_4:"早上好",
    item_5:"下午好",
    item_6:"晚上好",
    item_7:"努力加载中" 
  },
  js_bot:{
      item_1:"You can use the manual service by clicking the 'Transfer manual customer service' button in the lower right corner.",
      item_2:"Sorry, due to your unusual number of recent requests, I am temporarily unable to serve you :(",
      item_3:"在这里提问吧...",
      item_4:"Sorry, I can't understand your question for a while, can you try another way of asking questions~",
      item_5:"I can't understand your question for a while"
  },
  settings: {
    "switch_manual":"Transfer manual / manual / transfer customer service / customer service / manual customer service / manual service",
    "malicious_user_time":"120",
    "hint":"您可以问我会员相关的问题，比如 如何升级会员卡、如何在线申请会员卡、如何修改查询密码等。",
    "issues_number":"2",
    "welcome_message":"我是智能客服助手，为您提供常见问题查询服务。",
    "intent_fails_times":"1000",
    "malicious_user_banned":"199",
    "switch_manual_times":"1000"
  }
}

module.exports = display
