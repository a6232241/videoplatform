const host = "https://" + window.location.host;

//---------------------------- 驗證是否為登入狀態
// 取得 cookie
const getCookie = (cName) => {
    let name = cName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        // 如果字串首字元為空格則移除
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        // 如果找到對應的 name 則返回結果
        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// 取得儲存
const getLocalStorage = (name) => {
    if (typeof (Storage) !== "undefined") {
        let storage = localStorage.getItem(name);
        return storage;
    } else {
        let cookie = getCookie(name);
        return cookie;
    }
}

// 刪除儲存
const removeLocalStorage = (name) => {
    if (typeof (Storage) !== "undefined") {
        localStorage.removeItem(name);
    } else {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

//---------------------------- 驗證是否為登入狀態
$(document).ready(() => {
    if (getLocalStorage('account')) $('#my-id').text(getLocalStorage('account'));
    $.ajax({
        url: '../src/model/login.php',
        method: 'POST',
        dataType: 'json',
        data: "&action=incsession",
        success: (res) => {
            if (res.login === "false") {
                window.location = host + "/loginUI.php";
            }
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },
        async: true, // 異步請求
        cache: false, // 停止瀏覽器緩存加載
    });
});

//-------------------------- 登出
// 點擊登出
$('.logout').click(() => {
    if (confirm("ログアウトしますか?")) {
        logOut();
    }
});

function logOut() {
    $.ajax({
        url: '../src/model/logout.php',
        type: 'POST',
        data: `name=${getLocalStorage('account')}`,
        success: () => {
            window.location = host + "/loginUI.php";
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },
        async: true, // 異步請求
        cache: false, // 停止瀏覽器緩存加載
    });
}