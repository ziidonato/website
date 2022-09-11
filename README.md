# My Personal Website
Made in NextJS ( This could've been a React app )

# Components
- base
  - Button
    - creates a button that can be animated
    - calls an optional function on click
  - CustomLink
    - creates either an anchor or next Link, depending on the value of `sameSite`
    - Can be animated ( wraps a Button )
  - DisplayCard
    - Container to hold bulk information
    - Mobile - Title with card, on Click = Portal with content
    - Desktop - Card with content
  - List
    - Creates a list that animates the children
    - Can be a dropdown or regular list, depending on `dropdown`
  - PageOverlay
  - Portal
    - Creates a blurred, darkened portal that children can go onto
      - If the user clicks outside the children, the portal exits
- header
  - Nav
    - Desktop - Navbar in header
    - Mobile - Button to open Portal with Nav
    - Nav - decides which one to render, and has a context hook for links
  - Header - Contains the Nav, title, and links
  - Links - Contains the links for the header
- views - where the "pages" are
  - Home
  - Experience
  - Projects
  - About