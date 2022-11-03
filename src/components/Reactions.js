import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/todos/todoSlice";
import styled from "@emotion/styled";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        type="Button"
        className="reactionButton"
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </Button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;

const Button = styled.button`
  padding: 0.1rem 0.4rem;
  margin: 0 1rem;
  border: none;
`;
