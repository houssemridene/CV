import pdf from '../../Asset/cv.pdf'

import Button from 'react-bootstrap/Button'


function Cv() {
    return (
    <div className="cv">
        <Button variant="primary" href={pdf} target="_blank" >
            
            <div className="button">
            
            &nbsp;<h2>Download CV</h2>
            </div>
          </Button>
    </div>)
}
export default Cv