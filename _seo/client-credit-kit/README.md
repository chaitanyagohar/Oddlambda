# "Website by OddLambda" — client footer credit kit

Two ready-made versions of a small, branded footer credit:

| File | Use on |
|---|---|
| `OddLambdaCredit.jsx` | React / Next.js / Vite client sites |
| `oddlambda-credit.html` | WordPress, Shopify, Webflow, Wix, static HTML |

```jsx
<OddLambdaCredit client="elitairs.com" theme="dark" />
```

## How to use it without hurting your SEO

Google's spam policy lists **"widely distributed links in the footers or templates of various sites"**
as a form of link spam. A credit on a site you really built is normal and expected, but
it should look and behave like a credit, not like an SEO tactic. So the kit follows these rules
by default:

1. **Branded anchor text only.** It always says "Website by OddLambda". Never use keyword anchors
   like "best website developer in Delhi". Keyword anchors in footers are what get penalised.
2. **`rel="nofollow"` by default.** Footer links repeated on every page pass little ranking value
   anyway, and nofollow removes any risk. What you actually get from the credit is **referral
   visitors, brand searches and trust**. Those are the real wins.
3. **UTM tracking.** Each link is tagged `utm_source=<client domain>`, so Vercel Analytics or GA
   shows which client sites send you visitors. Your pages' canonical tags stop the UTM URLs being
   indexed as duplicates.
4. **Get the client's OK.** Clause 8 of the new Terms of Service covers the footer credit and lets
   clients ask for it to be removed.

## Getting links that actually help rankings

One editorial link counts for more than hundreds of footer links. For every launch:

- Ask the client to mention you **once, in context** on their About, Credits or Team page, e.g.
  *"Our website was designed and built by [OddLambda](https://oddlambda.com)."* That one can be a normal (followed) link.
- Ask for a **Google review** of OddLambda, and a LinkedIn post tagging you at launch.
- Publish a **case-study page** on oddlambda.com for the project and ask the client to share it.
- Submit live projects to galleries like Awwwards, CSS Design Awards, Godly, Land-book and Behance.
  These are relevant, high-authority links.
