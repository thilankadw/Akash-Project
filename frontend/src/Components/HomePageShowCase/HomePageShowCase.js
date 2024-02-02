import styles from "../../Styles/styles";

const HomePageShowCase = (props) => {

    return(

        <>
            <div className="w-[240px] mb-[63px]  border-t-[2px] pt-[22px]">
                <div className={`${styles.body_20_regular}`}>{props.number}</div>
                <div className={`${styles.body_30_extrabold} mb-[22px] w-[175px]`}>{props.title}</div>
                <div className={`${styles.paragraph_16}`}>{props.text}</div>
            </div>
        </>

    );

}

export default HomePageShowCase;