import { shallow } from 'enzyme';
import Todo from './Todo';

describe('Todo', () => {
  it("should display prop's task in render", () => {
    const task = 'Decorate cat';
    const wrapper = shallow(<Todo task={task} />);

    expect(wrapper.find('p').text()).toBe(task);
  });

  it('should be an article', () => {
    const wrapper = shallow(<Todo />);

    expect(wrapper.type()).toBe('article');
  });

  it('should call edit fn when edit btn is clicked', () => {
    const id = 'fake_id';
    const editFn = jest.fn();
    const wrapper = shallow(<Todo id={id} edit={editFn} />);
    const editBtn = wrapper.find('button[children="Edit"]');

    editBtn.simulate('click');

    expect(editFn).toHaveBeenCalledTimes(1);
    expect(editFn).toHaveBeenCalledWith(id);
  });

  it('should call close fn when close btn is clicked', () => {
    const id = 'fake_id';
    const closeFn = jest.fn();
    const wrapper = shallow(<Todo id={id} close={closeFn} />);
    const closeBtn = wrapper.find('button[aria-label="Close"][children="X"]');

    closeBtn.simulate('click');

    expect(closeFn).toHaveBeenCalledTimes(1);
    expect(closeFn).toHaveBeenCalledWith(id);
  });
});
