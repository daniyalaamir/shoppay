import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'

export default function Home({ country }) {
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  )
}

export async function getServerSideProps() {
  let data = await axios
    .get(`https://api.ipregistry.co/66.165.2.7?key=${process.env.IP_REGISTRY_API_KEY}`)
    .then(res => res.data.location.country)
    .catch(err => console.log(err) )
    return {
      props: {
        // country: { name: data.name, flag: data.flag.emojitwo }
        country: {
          name: "United States",
          flag: "https://cdn-icons-png.flaticon.com/512/323/323310.png?w=360"
        }
      }
    }
}