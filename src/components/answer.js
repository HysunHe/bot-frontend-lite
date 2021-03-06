import ko from 'knockout'
import format from 'date-fns/format'
import answerTemplate from '../templates/answer.html'
class AnswerViewModel {
  constructor(params) {
    const self = this;
    self.answer = params.message.body;
    self.bot = params.bot;
    self.showFeedback = !self.bot.removeAskFeedback;
    self.message = params.message;
    self.items = params.message.actions;

    self.answered = async function (_data, _event) {
      const message = {
        type: 'text',
        timestamp: format(new Date(), 'HH:mm'),
        body: "I'm glad to serve you, have a good day!"
      }
      await self.bot.appendMessage(message)
    }

    self.keepGoing = async function (_data, _event) {
      if (self.bot.blocked()) {
        self.bot.youAreBlocked()
        return
      }
      await self.bot.sayHello()
    }

    self.loadItem = async function (_data, event) {
      // console.log("loadItem", _data);
      self.bot.appendQuestion(_data.label)
      if (_data.type === 'location') {
        if (navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(function (position) {
            self.bot.sendMessage({
              "longitude": position.coords.longitude,
              "latitude": position.coords.latitude
            }, 'location');
          }, function (err) {
            self.bot.sendMessage({
              "longitude": 0,
              "latitude": 0
            }, 'location');
            alert('Failed to send your location！');
            console.error('Failed to get geolocation', err);
          }, {
              enableHighAccuracy: true,
              timeout: 3000,
              maximumAge: 0
            });
        } else {
          self.bot.sendMessage({
            "longitude": 0,
            "latitude": 0
          }, 'location');
          alert('Location is not supported by your browser！');
          console.error('Failed to get geolocation', err);
        }
      } else {
        self.bot.sendMessage(_data.postback, 'postback');
      }
    }
  }
}

ko.components.register('answer', {
  viewModel: AnswerViewModel,
  template: answerTemplate
})
