import { Footer } from './footer';
import { setup } from '../../../test';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = setup(<Footer />);
    expect(baseElement).toBeTruthy();
  });
  // it('snapshot', () => {
  //   const { baseElement } = render(
  //     wrapperMemoryRouter(<Footer />)
  //   );
  //   expect(baseElement).toMatchSnapshot();
  // });
});
