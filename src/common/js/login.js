import { $, jQuery } from 'jquery'
window.$ = window.jQuery = jQuery

// $('.message a').click(function () {
//   $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow')
// })

const host = 'https://' + window.location.host

// $(document).ready(() => {

//     if (isWebview()) {
//         window.location.protocol = 'googlechromes:'
//     }

//     $('input[name='name']').focus()

//     // if(!isMobileDevice()) phoneUI()

//     $.ajax({
//         url: 'src/model/login.php',
//         method: 'POST',
//         dataType: 'json',
//         data: '&action=incsession',
//         success: (res) => {
//             if (res.login === 'true') {
//                 window.location = host + '/backstage.php'
//             }
//         },
//         error: (XMLHttpRequest, textStatus, errorThrown) => {
//             alert(XMLHttpRequest.status)
//             alert(XMLHttpRequest.readyState)
//             alert(textStatus)
//         },
//         async: true, // 異步請求
//         cache: false, // 停止瀏覽器緩存加載
//     })
// })

export default {

  // ----------------------------- 註冊
  signup (formDom) {
    let form = $(formDom)
    // let name = $('.register-form').children("input[name='name']")
    let pwd = $('.register-form').children("input[name='pwd']")
    let repeatPwd = $('.register-form').children("input[name='re-pwd']")
    // let mobilePhone = $('.register-form').children("input[name='M.P']")
    let sendBtn = $('.register-form').children('button')

    // name.change((e) => {
    //   verifyAccount(e)
    // })

    // let noRepeat = false
    // 驗證資料是否重複
    // function verifyAccount (e) {
    //   let thisDom = e.target
    //   $.ajax({
    //     url: 'src/model/login.php',
    //     method: 'POST',
    //     data: $(thisDom).serialize() + '&action=verifyAccount',
    //     dataType: 'json',
    //     success: (res) => {
    //       if (res.noRepeat === 'false') {
    //         $("input[name='name']").next().show()
    //       } else {
    //         $("input[name='name']").next().hide()
    //       }
    //       noRepeat = res.noRepeat
    //     },
    //     error: (XMLHttpRequest, textStatus, errorThrown) => {
    //       alert(XMLHttpRequest.status)
    //       alert(XMLHttpRequest.readyState)
    //       alert(textStatus)
    //     }
    //   })
    // }

    let checkPwd = false
    // 確認密碼
    const verifyPwd = (pwd, rePwd) => {
      rePwd.keyup(() => {
        if (pwd.val() !== rePwd.val()) {
          // rePwd.next().show()
          checkPwd = false
        } else {
          // rePwd.next().hide()
          checkPwd = true
        }
      })
    }

    // 傳遞資料
    const submitAccount = (sendBtn, form) => {
      sendBtn.on('click', (e) => {
        e.preventDefault()
        if (checkPwd) {
          $.ajax({
            url: '@/server/loginServer',
            method: 'POST',
            data: form.serialize(),
            success: (res) => {
              alert('註冊成功')
              // window.location = host + '/loginUI.php'
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
              alert(XMLHttpRequest.status)
              alert(XMLHttpRequest.readyState)
              alert(textStatus)
            }
          })
        } else {
          alert('請確認選項是否正確')
        }
      })
    }

    verifyPwd(pwd, repeatPwd)
    submitAccount(sendBtn, form)
  },

  // 設置儲存
  setLocalStorage (name, val) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem(name, val)
    } else {
      document.cookie = name + '=' + val
    }
  },

  // ----------------------------- 登入

  login () {
    let form = $('.login-form')
    let sendBtn = $('.login-form').children('button')

    verifyIdentity(form, sendBtn)

    function verifyIdentity (form, btn) {
      let name = form.children("[name='name']")
      let pwd = form.children("[name='password']")

      btn.click((e) => {
        e.preventDefault()
        if (name.val() === '' || pwd.val() === '') {
          alert('名稱或密碼不能為空!')
        } else {
          $.ajax({
            url: 'src/model/login.php',
            method: 'POST',
            dataType: 'json',
            data: form.serialize() + '&action=login',
            // 'acc-email=' + escape(email.val()) + '&acc-password=' + escape(pwd.val()), 加密
            success: (res) => {
              if (res.login === 'false') {
                pwd.next().show()
              } else if (res.login === 'true') {
                pwd.next().hide()
                // setLocalStorage('account', name.val())
                window.location = host + '/backstage.php'
              }
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
              alert(XMLHttpRequest.status)
              alert(XMLHttpRequest.readyState)
              alert(textStatus)
            },
            async: true, // 異步請求
            cache: false // 停止瀏覽器緩存加載
          })
        }
      })
    }
  },

  // ---------------------------- 驗證是否為登入狀態
  // 判斷是否為手機設備
  isMobileDevice () {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e)) && window.screen.width < window.screen.height
    return isMobileDevice
  },

  // 判斷網頁是否為in-app瀏覽器開啟
  isWebview () {
    var useragent = navigator.userAgent
    var rules = ['WebView', '(iPhone|iPod|iPad)(?!.*Safari)', 'Android.*(wv|.0.0.0)', 'FBAN', 'FBAV']
    var regex = new RegExp(`(${rules.join('|')})`, 'ig')
    return Boolean(useragent.match(regex))
  }
}
