from diagrams import Cluster, Diagram, Edge
from diagrams.aws.security import ACM, Cognito
from diagrams.aws.general import User
from diagrams.aws.compute import Lambda
from diagrams.aws.database import RDSMysqlInstance
from diagrams.aws.network import Route53, APIGateway
from diagrams.onprem.ci import GithubActions

with Diagram("", filename="backend_diagram", outformat="png"):
    user = User("User")
    github_action = GithubActions("Github Action")

    with Cluster("AWS"):
        route_53 = Route53("Route53")
        cognito_userpool = Cognito("Cognito")

        with Cluster(""):
            api = APIGateway("API Gateway")
            api - ACM("ACM")

            with Cluster(""):
                lambda_api = Lambda("Lambda API")
                lambda_db = Lambda("Lambda DB Admin")

                rds = RDSMysqlInstance("DB")
                lambda_api >> rds
                lambda_db >> rds

            api >> lambda_api

    user >> Edge(label="/ GET/POST\n(JWT)") >> route_53 >> api
    user >> Edge(label="Username/Password") >> cognito_userpool
    user << Edge(label="JWT") << cognito_userpool

    github_action >> Edge(label="Deploys lambda") >> [lambda_api, lambda_db]
