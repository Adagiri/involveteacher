import styled from 'styled-components'

export const GlobalStyle = styled.div`

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");
:root {
  --tablet: 768px;
  --smallMonitor: 992px;
  --largeMonitor: 1200px;
  --font-family: 'Open Sans', sans-serif;
}
body {
  font-family: var(--font-family) !important;
  position: absolute;
  top: 0;
}
body ::-webkit-scrollbar {
  width: 6px;
}
.sidey {
  position: absolute;
  color: green;
}
.ui.vertical.menu.sidebar-menu {
  margin-top: 40px !important;
  max-height: calc(100% - 40px) !important;
  height: calc(100% - 40px) !important;
}
.ui.vertical.menu.sidebar-menu .item i.icon {
  float: left;
  margin: 0em 0.5em 0em 0em;
}
.main-content {
  margin-top: 40px;
}
@media (min-width: 768px) {
  .ui.vertical.menu.sidebar-menu {
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    width: 15rem !important;
  }
  .main-content {
    margin-left: 14rem;
    width: 100vw;
  }
  .sidebar-menu-toggler {
    display: none !important;
  }
}  
`;