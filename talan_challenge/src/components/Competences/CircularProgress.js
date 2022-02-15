
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

function CircularProgress(props) {
    return <div className="circularprogress">

<CircularProgressBar
  colorCircle="#f1f1f1"
  colorSlice="#880E4F"
  fontSize="1em"
  percent={props.pourcentage}
  textPosition="1.5em"
>
  
</CircularProgressBar>
    </div>
}
export default CircularProgress