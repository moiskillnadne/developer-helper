import Container from "@mui/material/Container"

import { headerHeight } from "~/shared/utils"
import { WorkInProgress } from "~/widgets/WorkInProgress"

export const DashboardPage = () => {
  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <WorkInProgress />
    </Container>
  )
}
