import styles from './index.less';

export default class CodeMirror extends React.Component {
  constructor(props) {
    super(props);

    this.codemirror = React.createRef();
  }

  componentDidMount() {
    const { value, options, onChange } = this.props;

    const editor = window.CodeMirror.fromTextArea(this.codemirror.current, {
      value,
      lineNumbers: true, // 显示行数
      indentUnit: 2, // 缩进单位为2
      styleActiveLine: true, // 当前行背景高亮
      matchBrackets: true, // 括号匹配
      mode: 'javascript', // javascript模式
      lineWrapping: true, // 自动换行
      theme: 'monokai', // 使用monokai模版
      ...options,
    });

    editor.on('change', (codemirror) => {
      const text = codemirror.getValue();
      onChange && onChange(text);
    });
  }

  render() {
    return (
      <div className={styles.codemirror}>
        <textarea ref={this.codemirror} />
      </div>
    );
  }
}
