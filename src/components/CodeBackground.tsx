
import React from 'react';

const CodeBackground = () => {
  const codeSnippets = [
    `const developer = {
  name: "El Almi Youssef",
  skills: ["React", "JavaScript", "Python", "Java"],
  passion: "Building amazing experiences",
  status: "Available for opportunities"
};

function createMagic() {
  return developer.skills.map(skill => 
    skill + " mastery achieved 🚀"
  );
}

// Building the future, one line at a time
const portfolio = new Portfolio({
  animations: true,
  performance: "optimized",
  userExperience: "exceptional"
});

class FullStackDeveloper {
  constructor(name) {
    this.name = name;
    this.expertise = ["Frontend", "Backend", "Mobile"];
    this.frameworks = ["React", "Node.js", "Spring Boot"];
  }
  
  async buildProject(idea) {
    const result = await this.code(idea);
    return result.deploy();
  }
}

// React Component Example
const WelcomeComponent = () => {
  const [greeting] = useState("Hello World!");
  
  useEffect(() => {
    console.log("Portfolio loaded successfully!");
  }, []);
  
  return <div className="amazing">{greeting}</div>;
};

// Java Spring Boot Controller
@RestController
@RequestMapping("/api")
public class ProjectController {
    
    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getProjects() {
        return ResponseEntity.ok(projectService.findAll());
    }
}

// Python Data Processing
import pandas as pd
import numpy as np

def analyze_performance(data):
    return {
        'efficiency': np.mean(data['speed']),
        'accuracy': np.std(data['results']),
        'scalability': 'infinite'
    }

// Database Query Optimization
SELECT p.name, p.description, 
       COUNT(l.id) as likes,
       AVG(r.rating) as rating
FROM projects p
LEFT JOIN likes l ON p.id = l.project_id
LEFT JOIN reviews r ON p.id = r.project_id
GROUP BY p.id
ORDER BY rating DESC, likes DESC;

// Advanced JavaScript Patterns
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

// TypeScript Interface Design
interface ProjectConfig {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  scripts: {
    build: string;
    test: string;
    deploy: string;
  };
}`,
  ];

  return (
    <div className="code-background animate-code-scroll">
      <pre className="whitespace-pre-wrap p-8">
        {codeSnippets[0]}
        {codeSnippets[0]} {/* Duplicate for seamless scroll */}
      </pre>
    </div>
  );
};

export default CodeBackground;
