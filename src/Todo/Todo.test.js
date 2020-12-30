import { shallow } from 'enzyme';
import Todo from './Todo';

describe('Todo', () => {
  it('should display prop task in render', () => {
    const task = 'Decorate cat';
    const wrapper = shallow(<Todo task={task} />);

    expect(wrapper.find('p').text()).toBe(task);
  });

  it('should be an article', () => {
    const wrapper = shallow(<Todo />);

    expect(wrapper.type()).toBe('article');
  });
});
