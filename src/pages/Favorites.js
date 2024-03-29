import { useSelector } from "react-redux";
import {
  selectError,
  selectFavTeachers,
  selectIsLoading,
} from "../redux/selectors";
import { Card } from "../../src/components/Teachers/Card/Card";
import { Container } from "../CommonStyles.styled";
import { Loader } from "../components/Loader/Loader";

const Favorites = () => {
  const favTeachers = useSelector(selectFavTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <section style={{ background: "#f8f8f8" }}>
      <Container>
        {isLoading && !error && <Loader />}
        {error && <p>Something went wrong, try reloading the page</p>}
        <ul>
          {favTeachers?.map((teacher) => (
            <li key={teacher.id}>
              <Card teacher={teacher} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Favorites;
