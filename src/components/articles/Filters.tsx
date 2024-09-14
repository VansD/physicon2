import rubricStore from "@/stores/rubricStore"
import { observer } from "mobx-react-lite";
import styles from "@/styles/articles/articleFilters.module.scss";
import { FiltersProps } from "@/pages/articles";

export const Filters: React.FC<FiltersProps> = observer(({rubrics}) => {
    const { activeRubrics, addActiveRubric, removeActiveRubric } = rubricStore;
    const handleClick = (rubricId: string) => {
        !activeRubrics.includes(rubricId)
            ? addActiveRubric(rubricId)
            : removeActiveRubric(rubricId)
    }

    return <div className={styles.container}>
        {rubrics && rubrics.map(rubric =>
            <div key={rubric.id}
                className={[styles.filter, activeRubrics.includes(rubric.id) ? styles.active : ""].join(" ")} 
                onClick={() => handleClick(rubric.id)}>
                {rubric.title}
            </div>
        )}
    </div>
})