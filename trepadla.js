var trepadla_css = `<style>
.body_im .side_bar .side_bar_inner {
    visibility: hidden; 
    padding-left: 0;
    padding-right: 0;
}

#page_layout {
    margin: 0 0;
    padding: 0;
}

.body_im .side_bar {
    padding-left: 0px;
  body.new_header_design .side_bar_inner {
    width: 0px;
  }
}

.im-chat-input .im-chat-input--textarea {
    width: 88%;
}

.HeaderNav__item--logo {
    display: none;
}

.HeaderNav__item--gap {
    display: none;
}

.HeaderNav__audio {
    display: none;
}

.FCPanel {
    display: none;
}

.im-page {
    padding-top: 5px;
}

#react_rootEcosystemServicesNavigationEntry {
    display: none;
}
</style>
`;
document.getElementById('page_body').style = 'width: 99.5%';
document.getElementsByTagName("html")[0].style="--layout-width: 99.5%"
document.getElementsByClassName('im-page--chat-body-abs')[0].style="width: 99%"
document.head.insertAdjacentHTML('beforeend', trepadla_css);
