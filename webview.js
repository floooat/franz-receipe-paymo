module.exports = (Franz) => {
    const getMessages = function getMessages() {
      let count = parseInt(document.querySelector('.jss25.jss13.jss28').innerText);
      Franz.setBadge(count);
    };
  
    Franz.loop(getMessages);
};