from diagrams import Cluster, Diagram, Edge
from diagrams.aws.security import ACM, Cognito
from diagrams.aws.general import User
from diagrams.aws.compute import Lambda
# from diagrams.aws.storage import S3
# from diagrams.aws.integration import Eventbridge
from diagrams.aws.database import RDSMysqlInstance
from diagrams.aws.network import Route53, APIGateway
from diagrams.onprem.ci import GithubActions
from diagrams.programming.framework import GraphQL

with Diagram("", filename="backend_diagram", outformat="png"):
    user = User("User")
    github_action = GithubActions("Github Action")

    with Cluster("AWS"):
        route_53 = Route53("Route53")
        cognito_userpool = Cognito("Cognito")

        # s3 = S3("DB Migrations")
        api = APIGateway("API Gateway")
        api - ACM("ACM")

        with Cluster("VPC Private Subnet"):
            with Cluster(""):
                lambda_api = Lambda("Lambda API")
                lambda_api - GraphQL("GraphQL")
            # lambda_db = Lambda("Lambda DB Admin")

            rds = RDSMysqlInstance("DB")

            lambda_api >> rds
            # lambda_db >> rds

        api >> lambda_api
        # s3 >> Edge(label="Object Updated") >> Eventbridge("EventBridge Rule") >> lambda_db

    user >> Edge(label="/ GET/POST\n(JWT)") >> route_53 >> api
    user >> Edge(label="Username/Password") >> cognito_userpool
    user << Edge(label="JWT") << cognito_userpool

    github_action >> Edge(label="Deploys lambdas") >> lambda_api
    # github_action >> Edge(label="Syncs migration files") >> s3
