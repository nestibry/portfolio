import { portfolio } from "../assets/data/portfolio";

export default function Portfolio() {

    return portfolio.map((item, index) => (

        <div key={item.id}>
            <img className='profile-image' src={`../src/assets/images/${item.img}`} alt="Bryan Nestingen's profile photo." />
            <h3>{item.id}: {item.name} </h3>
            <p>{item.description}</p>
            <p>{item.stack}</p>
            <p>{item.img}</p>
            <p>{item.app}</p>
            <p>{item.repo}</p>
            <p>{item.demo.length ? item.demo : 'no demo'}</p>
        </div>

    ));
}