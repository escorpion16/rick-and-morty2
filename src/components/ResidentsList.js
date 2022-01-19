import ResidentInfo from './ResidentInfo';
import '../styles/residentList.css';

const ResidentsList = ({data}) => {
    
    return (
        <div className="resident-list">
            {data && data.residents.slice(0,10).map(resident => <div key={resident}> <ResidentInfo residentUrl={resident} /> </div>)}
        </div>
    );
};

export default ResidentsList;