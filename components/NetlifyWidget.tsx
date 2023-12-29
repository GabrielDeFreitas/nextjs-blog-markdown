import Script from 'next/script'

export default function NetlifyWidget() {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </>
  )
}
