document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');

  const handleSubmit = (e) => {
    e.preventDefault();
    paragraphProps.background = document.querySelector('#background').value;

    switch (document.querySelector('#border').options.selectedIndex) {
      case 0:
        paragraphProps.border = document.querySelector('#border1').value;
        break;

      case 1:
        paragraphProps.border = document.querySelector('#border2').value;
        break;

      case 2:
        paragraphProps.border = document.querySelector('#border3').value;
        break;

      default:
        paragraphProps.border = document.querySelector('#border1').value;
    }

    if (document.querySelector('#bangers').checked) {
      paragraphProps.fontFamily = document.querySelector('#bangers').value;
    } else if (document.querySelector('#dancingScript').checked) {
      paragraphProps.fontFamily = document.querySelector('#dancingScript').value;
    } else if (document.querySelector('#lobster').checked) {
      paragraphProps.fontFamily = document.querySelector('#lobster').value;
    } else if (document.querySelector('#montserrat').checked) {
      paragraphProps.fontFamily = document.querySelector('#montserrat').value;
    } else if (document.querySelector('#marckScript').checked) {
      paragraphProps.fontFamily = document.querySelector('#marckScript').value;
    } else if (document.querySelector('#robotoMono').checked) {
      paragraphProps.fontFamily = document.querySelector('#robotoMono').value;
    } else {
      paragraphProps.fontFamily = "'Open Sans', sans-serif;";
    }

    if (document.querySelector('#fontSizeSmall').checked) {
      paragraphProps.fontSize = document.querySelector('#fontSizeSmall').value;
    } else if (document.querySelector('#fontSizeRegular').checked) {
      paragraphProps.fontSize = document.querySelector('#fontSizeRegular').value;
    } else if (document.querySelector('#fontSizeLarge').checked) {
      paragraphProps.fontSize = document.querySelector('#fontSizeLarge').value;
    } else {
      paragraphProps.fontSize = '1rem';
    }

    if (document.querySelector('#darkmode').checked) {
      paragraphProps.isDarkMode = true;
    } else {
      paragraphProps.isDarkMode = false;
    }

    if (document.querySelector('#lineHeight').checked) {
      paragraphProps.lineHeight = document.querySelector('#lineHeight').value;
    } else {
      paragraphProps.lineHeight = 'initial';
    }

    displayParagraph.style.background = paragraphProps.background;
    displayParagraph.style.border = paragraphProps.border;
    displayParagraph.style.fontFamily = paragraphProps.fontFamily;
    displayParagraph.style.fontSize = paragraphProps.fontSize;
    displayParagraph.style.lineHeight = paragraphProps.lineHeight;

    if (paragraphProps.isDarkMode) {
      body.style.background = '#000000c2';
      form.style.background = 'rgba(73, 8, 41, 0.84)';
      pageHeader.style.color = '#ffffff';
      formLegend.forEach((node) => (node.style.color = '#ffffff'));
      formLabel.forEach((node) => (node.style.color = '#ffffff'));
      sectionWrapper.forEach((node) => (node.style.backgroundColor = '#000000'));
      console.log(formLegend);
    } else {
      body.style.backgroundColor = '#fa8bff';
      body.style.backgroundImage = 'linear-gradient( 45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90% )';
      form.style.background = '#ff69b4ab';
      pageHeader.style.color = '#000000';
      formLegend.forEach((node) => (node.style.color = '#000000'));
      formLabel.forEach((node) => (node.style.color = '#000000'));
      sectionWrapper.forEach((node) => (node.style.backgroundColor = '#f0ffff'));
    }

    window.scrollBy(0, -1000);
  };

  const displayParagraph = document.querySelector('.display-paragraph');
  const form = document.querySelector('#form');
  const body = document.querySelector('body');
  const pageHeader = document.querySelector('.page-header');
  const formLegend = document.querySelectorAll('.form__legend');
  const formLabel = document.querySelectorAll('.form__label');
  const sectionWrapper = document.querySelectorAll('.mid-section-wrapper');

  const paragraphProps = {
    background: '',
    border: '',
    fontFamily: '',
    fontSize: '',
    lineHeight: '',
    isDarkMode: false,
  };

  form.addEventListener('submit', handleSubmit);
});
