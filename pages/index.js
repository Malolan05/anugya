import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section id="about">
        <h2>About Us</h2>
        <p>
          <strong>Anugya Trust</strong> is a non-profit organization dedicated to supporting Veda Parayanam in remote Divyadeshams across Tamil Nadu. 
          Our mission is to support Adhyapakas for regular veda parayanams in Divyadeshams. 
          We aim to support regular veda parayana Kainkaryams in Srivaishnava Temples.
        </p>
      </section>

      <section id="donate">
        <h2>Donate to Anugya Trust</h2>
        <p>
          Your generous contributions help us continue our programs and expand veda parayana kainkaryams. 
          Every donation, big or small, helps make a difference.
        </p>
        <ul>
          <li>Bank Transfer: <strong>Account Name:</strong> ANUGYA KAINKARYAM CHARITABLE TRUST | <strong>Account Number:</strong> 50200047844154 (HDFC Bank) | <strong>IFSC:</strong> HDFC0000879</li>
          <li>UPI: <strong>anugyatrust@upi</strong></li>
        </ul>
        <p>
          For other ways to donate, please contact us at 7904327457 or 7402503066. Can avail tax exemption under Section 80G.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form action="mailto:akctrust@outlook.com" method="mail" encType="text/plain">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Send</button>
        </form>
        <p>
          Or email us directly at <a href="mailto:contact@anugyatrust.org">contact@anugyatrust.org</a>
        </p>
      </section>
    </Layout>
  )
}
