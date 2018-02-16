module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    // Get element by ng-if because classes are encrypted
    const elements = document.querySelectorAll('[ng-if="sidebar_counters.inbox > 0"]');

    // Check if we found DOM-element
    if(elements.length > 0 && elements[0] instanceof Element) {
      count = elements[0].innerHTML;
    }

    // Set the badge to count
    Franz.setBadge(count);
  };

  // Loop
  Franz.loop(getMessages);
};
