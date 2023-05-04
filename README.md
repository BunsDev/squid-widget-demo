# Squid Widget Demo

## 📃 Docs Improvements

### 📙 Installation guide

When using the Widget in NextJS, the `next-transpile-modules` NPM package is not longer needed if you are using `NextJS>=v13.1`. Since this version, NextJS has the `next-transpile-modules` package built-in.

Reference links:

- https://nextjs.org/blog/next-13-1#built-in-module-transpilation-stable
- https://github.com/martpie/next-transpile-modules/releases/tag/the-end

### ⚙️ Missing config option

The `enableExpress` config option is implemented in the API, but not present in the docs

## 💅🏾 Widget styles customization

In order to style each component of the Widget via CSS, we can use the following IDs:

- Widget container: `squid-widget`
- Widget header: `squid-widget-header`
- Widget header logo: `squid-header-logo`
- Widget header title: `squid-header-title`
- Swap direction text ("from" or "to"): `squid-swap-direction-txt`
- Primary Hover button: `squid-primary-hover-button`
- Secondary hover button: `squid-secondary-hover-button`
- Dropdown button: `squid-dropdown-btn`
- Dropdown icon: `squid-dropdown-icon`
- Dropdown label: `squid-dropdown-label`
- Icon button: `squid-icon-button`
- Submit swap button: `squid-submit-swap-btn`
- Swap source container: `squid-swap-source`
- Swap destination container: `squid-swap-destination`

## ✨ Customization improvement

In [this line of the Widget header component](https://github.com/0xsquid/squid-widget/blob/504ad860619ee1511800f4e620f36f8ed7ce879c/packages/widget/src/widget/components/HeaderLogo.tsx#LL19C23-L19C23), the `alt` attribute of the header logo is hardcoded to be "squid logo", but it would be nice to use the `companyName` instead.

It could be changed from this:

```tsx
<ImageWrapper
  alt="squid logo"
  //...
/>
```

to this:

```tsx
<ImageWrapper
  alt={`${config.companyName ?? "squid"} logo`}
  //...
/>
```

## 🔨 Minor fixes

Grammar mistake:

"If you our your users discover any persistent issues..." -> "If you _or_ your users discover any persistent issues..."
