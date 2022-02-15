
import SkillBar from 'react-skillbars';

function BarProgress() {


    const  SKILLS = [
        {
          "type": "Spring-Boot",
          "level": 60
        },
        {
          "type": "ReactJS",
          "level": 50
        },
        {
          "type": "AngularJS",
          "level": 60
        },
        {
          "type": "PHP",
          "level": 40
        }
        
      ]
    return <div className="barprogress">




<SkillBar skills={SKILLS}></SkillBar>



        
    </div>
}
export default BarProgress