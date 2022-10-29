class Switch {
  static changeContent = (key) => {
    const formMan = document.querySelector('.form-man');
    const listMan = document.querySelector('.list-man');
    const contactMan = document.querySelector('.contact-man');
    if (key === 'List') {
      formMan.style.display = 'none';
      contactMan.style.display = 'none';
      listMan.style.display = 'block';
    } else if (key === 'Add new') {
      listMan.style.display = 'none';
      contactMan.style.display = 'none';
      formMan.style.display = 'block';
    } else {
      formMan.style.display = 'none';
      listMan.style.display = 'none';
      contactMan.style.display = 'block';
    }
  };
}

export default Switch;
