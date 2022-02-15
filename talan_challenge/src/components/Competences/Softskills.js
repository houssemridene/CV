import CircularProgress from "./CircularProgress"

function Softskills() {
    return <div className="softskills">
    
        <h1>Soft Skills</h1>
        
        <table  cellspacing="5">
    <thead>
        <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><CircularProgress pourcentage="70"/></td>
            

            <td><CircularProgress pourcentage="80"/></td>
        
            
            <td><CircularProgress pourcentage="70"/></td>
           
            <td><CircularProgress pourcentage="75"/></td>
            
        </tr>
        <tr className="qualites">
        <td>Communication</td>
        <td>Travail en equipe</td>
        <td>Crèativitè</td>
        <td>Resoudre les problèmes</td>

        </tr>
    </tbody>
</table>
            
                
                

                
            

        </div>
}
export default Softskills