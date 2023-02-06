import { createGlobalStyle } from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  desktopS: customMediaQuery(1050),
  tabletL: customMediaQuery(985),
  phone: customMediaQuery(760),
};

export const GlobalStyles = createGlobalStyle`
:root {
    --primary-100: #e5e6ff;
    --primary-200: #625df5;
    --primary-300: #1f1ab9;
    --primary-400: #171386;
    --primary-500: #131070;
    --secondary-100: #faddd2;
    --secondary-200: #ed8c6a;
    --secondary-300: #be5834;
    --grey-100: #f7f7f7;
    --grey-200: #eef0f2;
    --grey-300: #e6e6e2;
    --grey-400: #c7cfd7;
    --grey-500: #869098;
    --grey-600: #4e5860;
    --grey-700: #202020;
    --grey-800: #040407;
    --grey-900: #000000;
    --danger-100: #ffa1a1;
    --danger-200: #f84f4f;
    --danger-300: #720000;
    --success-100: #e8fffe;
    --success-200: #07cec4;
    --success-300: #07cec4;
    --warning-100: #ffe380;
    --warning-200: #ffab00;
    --warning-300: #984f00;
    --white: #ffffff;
    --font-1: Inter, Helvetica, sans-serif;
    --font-2: Aeonik, Helvetica, Arial, sans-serif;
    --title-alt-1: 44px/52px var(--font-2);
    --title-alt-2: 36px/44px var(--font-2);
    --title-alt-3: 32px/40px var(--font-2);
    --title-alt-4: 20px/30px var(--font-2);
    --title-alt-5: 40px/52px var(--font-2);
    --title-1: 44px/52px var(--font-1);
    --title-2: 32px/48px var(--font-1);
    --title-3: 24px/36px var(--font-1);
    --body-1: 20px/30px var(--font-1);
    --body-2: 18px/27px var(--font-1);
    --body-3: 16px/24px var(--font-1);
    --body-4: 14px/24px var(--font-1);
    --body-5: 14px/18px var(--font-1);
    --body-3-alt: 14px/24px var(--font-2);
    --label-1: 12px/16px var(--font-1);
    --label-2: 12px/16px var(--font-1);
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;
    --focus-size: 4px;
    --focus-color: var(--grey-400);
    --focus-alt-color: var(--grey-200);
    --shadow-light: 0 2px 4px -1px rgba(26, 27, 31, 0.05);
    --shadow-regular: 0 4px 8px -2px rgba(26, 27, 31, 0.08);
    --shadow-medium: 0 6px 12px -4px rgba(26, 27, 31, 0.12);
    --shadow-bold: 0 12px 24px -6px rgba(26, 27, 31, 0.12);
    --blur-light: 10px;
    --blur-regular: 20px;
    --blur-medium: 30px;
    --blur-bold: 60px;
    --border-radius-small: 4px;
    --border-radius-medium: 8px;
    --border-radius-large: 12px;
    --gutter: 24px;
    --little-gutter: 12px;
    --ease-in: cubic-bezier(0.5, 0, 1, 1);
    --ease-out: cubic-bezier(0.31, 0.93, 0.59, 1);
    --ease-in-out: cubic-bezier(0.5, 0, 0.5, 1);
    --timing-short: 0.3s;
    --timing-medium: 0.5s;
    --timing-long: 1s;
}
*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-size: var(--font-size-body);
  line-height: var(--font-line-body);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  background-color: var(--color-purple);
  color: var(--color-black);
  position: relative;
}
h1,h2,h3,h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
}
a {
    text-decoration: none;
    color: inherit;
}

.PhoneInput {
  width: 100%;
  height: 40px;
  border: 1px solid var(--grey-500);
  border-radius: var(--border-radius-medium);
  background-color: var(--white);
  font: var(--medium) var(--body-4);
  padding: 0 14px;

  &--focus {
    border: 1px solid var(--grey-900);
  }

  .PhoneInputInput {
    width: 100%;
    height: 100%;
    border: none;
    margin-left: 10px;

    &:focus {
      outline: none;
    }
  }
}
`;