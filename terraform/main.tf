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

resource "aws_dynamodb_table" "deliverymans" {
    name = "deliverymans"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "deliveryman-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}

resource "aws_dynamodb_table" "products" {
    name = "products"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "products-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}

resource "aws_dynamodb_table" "sales" {
    name = "sales"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "sales-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}

resource "aws_dynamodb_table" "vehicles" {
    name = "vehicles"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "vehicles-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}

resource "aws_dynamodb_table" "adresses" {
    name = "adresses"
    attribute {
        name = "id"
        type = "S"
    }
   attribute {
    name = "owner"
    type = "S"
  }

  global_secondary_index {
    name            = "adresses-owner-gsi"
    hash_key        = "owner"
    projection_type = "ALL"
    write_capacity  = 1
    read_capacity   = 1
  }

    hash_key       = "id"
    read_capacity  = 1
    write_capacity = 1
}
