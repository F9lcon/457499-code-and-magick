'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var namesData = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNamesData = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatData = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesData = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var getWizards = function () {
  var wizards = [{}, {}, {}, {}];
  for (var i = 0; i < 4; i++) {
    wizards[i].name = namesData[getRandom(0, 7)] + ' ' + secondNamesData[getRandom(0, 7)];
    wizards[i].coatColor = coatData[getRandom(0, 5)];
    wizards[i].eyesColor = eyesData[getRandom(0, 4)];
  };
  return wizards;
};
var similarWizards = getWizards();
var similarWizardsList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}
similarWizardsList.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
