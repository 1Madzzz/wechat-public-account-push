/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的饱饱, 早上好！',
    desc: `
      **今天又是充满希望的一天~**\n
      **{{date.DATA}}**\n
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      最低气温: {{min_temperature.DATA}}\n
      最高气温: {{max_temperature.DATA}}\n
      注意:{{notice.DATA}}\n
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      
      ---
      
      今天是我们在一起的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{earthy_love_words.DATA}} 
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
