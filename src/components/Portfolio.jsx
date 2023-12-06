import { portfolio } from "../assets/data/portfolio";

export default function Portfolio() {

    return portfolio.map((item, index) => (
        <>
            <h3>{item.id}: {item.name} </h3>
        </>
    ));
}