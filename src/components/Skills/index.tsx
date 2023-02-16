import skills from '../../skills.json'
import { Title, ContainerSkills, Skill, ContainerGeralSkills } from './styles';

export const Skills = () => {
  return (
    <ContainerGeralSkills id='skills'>
      <Title>Habilidades</Title>
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
    </ContainerGeralSkills>
  );
};