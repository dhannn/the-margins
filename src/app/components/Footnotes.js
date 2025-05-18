export default function Footnotes(props) {
    return (
      <div className="mt-2 text-xs text-gray-400 footnote">
        <ul>{props.children}</ul>
      </div>
    );
  }  