import homeTemplate from './../views/home.handlebars';

class HomeController {
  render() {
    return homeTemplate({name: 'John'});
  }
}

export default new HomeController();