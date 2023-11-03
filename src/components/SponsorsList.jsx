import { Grid,Container } from "@mui/material"
import Sponsors from "./Sponsors/Sponsors"


const SponsorsList = ({sponsors}) => {
   
  return (
    <div className="SponsorsList">
      <div className="sponsors">
        <Container maxWidth="lg">
          <Grid container spacing={2} className="gridSponsors">
            {sponsors.map((sponsor) => (
              <Sponsors sponsor={sponsor} key={sponsor.id} />
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default SponsorsList