/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
// 请将以下代码按照图示粘贴到对应位置
USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  //APP_ID: 'wxf9f1855599e626e2',

  // 使用微信测试号：公众号APP_SECRET
  //APP_SECRET: 'e26c69dad7963729fe40c5b208b8a4c1',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: '呼呼',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU25083T8MzKCwFnWwaWAJl0l3jNrXnKUU3dZbkd',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '胡胡', year: '1999', date: '07-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '呼呼', year: '1999', date: '03-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [

        //{ keyword: 'wx_birthday_0.DATA', date: '1999-03-05' },
        //{ keyword: 'wx_birthday_1.DATA', date: '1999-09-01' },
                // 在一起的日子
        { keyword: 'love_day', date: '2023-08-22' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

  TIAN_API:{
    key:"65a89d911868e57728d62a0afa1acf99"
  },
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Lp3r7UXF26fhu6iJvaaRbLdCfqpsA-nRe_z3mG2mnt8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],
  PROVINCE: '湖北',
  CITY: '武汉',
  FESTIVALS: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '胡胡', year: '1999', date: '07-23',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '呼呼', year: '1999', date: '03-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      CUSTOMIZED_DATE_LIST: [

        //{ keyword: 'wx_birthday_0.DATA', date: '1999-03-05' },
        //{ keyword: 'wx_birthday_1.DATA', date: '1999-09-01' },
                // 在一起的日子
        { keyword: 'love_day', date: '2023-08-22' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
}

module.exports = USER_CONFIG

