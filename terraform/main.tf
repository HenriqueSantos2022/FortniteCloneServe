resource "aws_dynamodb_table" "restaurants" {
    name = "restaurants"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "restaurants-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}

resource "aws_dynamodb_table" "customers" {
    name = "customers"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "customers-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}

resource "aws_dynamodb_table" "users" {
    name = "users"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "email"
    type = "S"
  }

  global_secondary_index {
    name            = "users-email-gsi"
    hash_key        = "email"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}



