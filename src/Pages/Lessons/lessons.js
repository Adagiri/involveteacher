import React from 'react';
import { connect } from 'react-redux';
import { selectLessons } from "../../redux/topics/topics.selectors";
import DTemplate from "../../components/DTemplate/dtemplate";
import { withRouter } from "react-router-dom";
import Term from "../../components/Terms/terms";
import { Segment, Label, Grid } from 'semantic-ui-react';

const LessonsPage  = ({topic}) => {

const lessons = topic[0].lessons

    return (
<DTemplate>
<div
className="pusher"
style={{
  minHeight: "100vh",
  background: " #09203f",
  height: "100vh",
  overflow: "hidden",
}}
>
<div
  className="main-content"
  style={{
    minHeight: "100%",
    padding: "3em",
    height: "100vh",
    overflow: "hidden",
  }}
>
<Grid>
<Grid.Row>
<Label size="huge" style={{background: "teal", color: "rgba(255,255,255, 0.8)"}}>
  Mathematics
</Label>
<Label size="huge" style={{background: "orange", color: "rgba(255,255,255, 0.8)"}}>
{lessons.length} {lessons.length > 1 || lessons.length=== 0 ?"lessons" : "lesson" } present
</Label>
</Grid.Row>

<Grid.Row centered >
<Segment loading={lessons.length === 0} style={{background: "transparent", display: "flex", justifyContent: "center"}}>
{ lessons.length > 0 ? <Term cards={lessons} status="lessons" />: ""}
</Segment>
</Grid.Row>
</Grid>
</div>
</div>
</DTemplate>
        )
}

const mapStateToProps = (state, ownProps) => {

    return {
        topic: selectLessons(ownProps.match.params.topic)(state)
    };
}

export default connect(mapStateToProps)(withRouter(LessonsPage));
