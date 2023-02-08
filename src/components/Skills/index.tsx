import skills from '../../skills.json'
import { Title, ContainerSkills, Skill } from './styles';

export const Skills = () => {
  return (
    <>
      <Title>SKILLS</Title>
      <ContainerSkills>
        {
          skills.map((skill, index) => {
            return <Skill key={index}>
              <img src={skill.img} alt="" />
              <span>{skill.name}</span>
            </Skill>
         })
        }
      </ContainerSkills>
    </>
  );
};