import { useNavigate } from "@tanstack/react-location";
import { useFormData } from "./App";

export default function CreateCard() {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormData();

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    setFormData((prev) => ({ ...prev, [e.target.value]: isChecked }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate({ to: "showcase", replace: true });
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1>DevCard</h1>
          <p>Your personal digital portfolio</p>
        </section>
      </div>

      <div className="right">
        <form>
          <section className="copy">
            <h2>Create your DevCard</h2>
          </section>
          <div className="input-container name">
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="aboutMe"
              placeholder="About Me"
              onChange={(e) =>
                setFormData({ ...formData, aboutMe: e.target.value })
              }
            />
          </div>
          <h3>Technologies You Know</h3>
          <div className="checkboxes">
            <label className="myLabel">
              <input
                type="checkbox"
                value="HTML"
                onChange={(e) => handleChange(e)}
              />
              HTML
            </label>
            <label className="myLabel">
              <input 
                type="checkbox" 
                value="CSS"
                onChange={(e) => handleChange(e)} 
              />
              CSS
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="JS"
                onChange={(e) => handleChange(e)}
              />
              JS
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="Git"
                onChange={(e) => handleChange(e)}
              />
              Git
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="React"
                onChange={(e) => handleChange(e)}
              />
              React
            </label>
            <label className="myLabel">
              <input
                type="checkbox"
                value="Node"
                onChange={(e) => handleChange(e)}
              />
              Node.JS
            </label>
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="githubURL"
              placeholder="Github URL"
              onChange={(e) =>
                setFormData({ ...formData, githubURL: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="twitterURL"
              placeholder="Twitter URL"
              onChange={(e) =>
                setFormData({ ...formData, twitterURL: e.target.value })
              }
            />
          </div>
          <div className="input-container name">
            <input
              type="text"
              name="favouriteBooks"
              placeholder="Favourite Books"
              onChange={(e) =>
                setFormData({ ...formData, favouriteBooks: e.target.value })
              }
            />
          </div>
          <button onClick={handleClick} className="signup-btn" type="submit">
            Create Site
          </button>
        </form>
      </div>
    </div>
  );
}
