import ResidentInfo from './ResidentInfo';

const ResidentsList = ({data}) => {

    const list = data && data.residents.slice(0,10).map(resident => <div key={resident}> <ResidentInfo residentUrl={resident} /> </div>)
    
    return (
        <div>
            {list}
        </div>
    );
};

export default ResidentsList;