// es6 polyfill
import 'core-js/fn/array/find-index';
import Icon from './components/icon';
import Button from './components/button';
import Input from './components/input';
import locale from './locale';
const zmoon = {
    Icon,
    Button,
    Input
};

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  Object.keys(zmoon).forEach((key) => {
    Vue.component(key, zmoon[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default Object.assign(zmoon, {install});
